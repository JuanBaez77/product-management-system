from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app import models, schemas

router = APIRouter()

# GET | Devuelve todas las categorias
@router.get("/categories", response_model=List[schemas.CategoryOut], summary="Obtiene todas las categorias")
def get_categories(db: Session = Depends(get_db)):
    return db.query(models.Category).all()

# POST | Crea una nueva categoria
@router.post("/categories", response_model=schemas.CategoryOut, summary="Crea una nueva categoria")
def create_category(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    existe = db.query(models.Category).filter(models.Category.category_name == category.category_name).first()
    if existe:
        raise HTTPException(status_code=400, detail="La categoria ya existe...")
    
    new_category = models.Category(category_name=category.category_name)
    db.add(new_category)
    db.commit()
    db.refresh(new_category)
    return new_category

# PUT | Modifica una categoria
@router.put("/categories/{category_id}", response_model=schemas.CategoryOut, summary="Modifica una categoria")
def category_update(category_id: int, updated_data: schemas.CategoryCreate, db: Session = Depends(get_db)):
    category = db.query(models.Category).filter(models.Category.category_id == category_id).first()
    if not category:
        raise HTTPException(status_code=404, detail="La categoria no existe...")
    
    category.category_name = updated_data.category_name
    
    db.commit()
    db.refresh(category)
    return category

# DELETE | Elimona una categoria
@router.delete("/categories/{category_id}", response_model=schemas.CategoryOut, summary="Elimina una categoria")
def category_delete(category_id: int, db: Session = Depends(get_db)):
    category = db.query(models.Category).filter(models.Category.category_id == category_id).first()
    if not category:
        raise HTTPException(status_code=404, detail="La categoria no existe...")
    
    db.delete(category)
    db.commit()
    return category