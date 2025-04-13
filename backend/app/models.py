from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime

Base = declarative_base()

class Category(Base):
    __tablename__ = "category"
    category_id = Column(Integer, primary_key=True, index=True)
    category_name = Column(String(50), unique=True, nullable=False)
    
    # Relación con productos, con borrado en cascada
    products = relationship(
        "Product",
        back_populates="category",
        cascade="all, delete-orphan",
        passive_deletes=True
    )

class Product(Base):
    __tablename__ = "product"
    product_id = Column(Integer, primary_key=True, index=True)
    product_name = Column(String(50), unique=True, nullable=False)
    product_description = Column(String(100), nullable=False)
    price = Column(Float, nullable=False)
    stock = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # ForeignKey con ON DELETE CASCADE
    category_id = Column(Integer, ForeignKey("category.category_id", ondelete="CASCADE"))
    
    # Relación inversa con Category
    category = relationship("Category", back_populates="products")