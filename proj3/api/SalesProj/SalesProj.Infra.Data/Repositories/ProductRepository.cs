﻿using Microsoft.EntityFrameworkCore;
using SalesProj.Domain.Entities;
using SalesProj.Domain.Interfaces;
using SalesProj.Infra.Data.Context;

namespace SalesProj.Infra.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private ApplicationDbContext _productContext;

        public ProductRepository(ApplicationDbContext context)
        {
            _productContext = context;
        }

        public async Task<Product> CreateAsync(Product product)
        {
            _productContext.Add(product);
            await _productContext.SaveChangesAsync();
            return product;
        }

        public async Task<Product> GetProductByIdAsync(int? id)
        {
            return await _productContext.Producties.FindAsync(id);
        }

        public async Task<Product> GetProductCategoryAsync(int? id)
        {
            return await _productContext.Producties.Include(c => c.Category)
                .SingleOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _productContext.Producties.ToListAsync();
        }

        public async Task<Product> RemoveAsync(Product product)
        {
            _productContext.Remove(product);
            await _productContext.SaveChangesAsync();
            return product;
        }

        public async Task<Product> UpdateAsync(Product product)
        {
            _productContext.Update(product);
            await _productContext.SaveChangesAsync();
            return product;
        }
    }
}
