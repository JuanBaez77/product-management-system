from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app import models, schemas

router = APIRouter()

# GET | Obtener todos los productos
@router.get("/products", response_model=List[schemas.ProductOut])
def get_products(db: Session = Depends(get_db)):
    products = db.query(models.Product).all()
    return products

# POST |Añadir un producto
@router.post("/products", response_model=schemas.ProductOut, summary="Añade un nuevo producto")
def add_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    existe = db.query(models.Product).filter(models.Product.product_name == product.product_name).first()
    if existe:
        raise HTTPException(status_code=400, detail="El producto ya existe")

    new_product = models.Product(**product.dict())
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

# PUT | Modificar un producto
@router.put("/products/{product_id}", response_model=schemas.ProductOut, summary="Modifica un producto existente")
def update_product(product_id: int, updated_product: schemas.ProductCreate, db: Session = Depends(get_db)):
    producto = db.query(models.Product).filter(models.Product.product_id == product_id).first()
    if not producto:
        raise HTTPException(status_code=404, detail="El producto no existe")

    for key, value in updated_product.dict().items():
        setattr(producto, key, value)

    db.commit()
    db.refresh(producto)
    return producto

# DELETE | Eliminar un producto
@router.delete("/products/{product_id}", response_model=schemas.ProductOut, summary="Elimina un producto")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    producto = db.query(models.Product).filter(models.Product.product_id == product_id).first()
    if not producto:
        raise HTTPException(status_code=404, detail="El producto no existe")

    db.delete(producto)
    db.commit()
    return producto