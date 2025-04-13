from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    product_name: str
    product_description: str
    price: float
    stock: int
    category_id: Optional[int]

class CategoryCreate(BaseModel):
    category_name: str

class CategoryOut(CategoryCreate):
    category_id: int

    class Config:
        from_attributes = True

class CategoryBase(BaseModel):
    category_id: int
    category_name: str

    class Config:
        from_attributes = True

class ProductOut(ProductCreate):
    product_id: int
    category: Optional[CategoryBase]

    class Config:
        from_attributes = True
