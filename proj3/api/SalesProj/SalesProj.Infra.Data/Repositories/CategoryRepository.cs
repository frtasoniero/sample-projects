﻿using Microsoft.EntityFrameworkCore;
using SalesProj.Domain.Entities;
using SalesProj.Domain.Interfaces;
using SalesProj.Infra.Data.Context;

namespace SalesProj.Infra.Data.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private ApplicationDbContext _categoryContext;

        public CategoryRepository(ApplicationDbContext context)
        {
            _categoryContext = context;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            _categoryContext.Add(category);
            await _categoryContext.SaveChangesAsync();
            return category;
        }

        public async Task<IEnumerable<Category>> GetCategoriesAsync()
        {
            return await _categoryContext.Categories.ToListAsync();
        }

        public async Task<Category> GetCategoryByIdAsync(int? id)
        {
            return await _categoryContext.Categories.FindAsync(id);
        }

        public async Task<Category> RemoveAsync(Category category)
        {
            _categoryContext.Remove(category);
            await _categoryContext.SaveChangesAsync();
            return category;
        }

        public async Task<Category> UpdateAsync(Category category)
        {
            _categoryContext.Update(category);
            await _categoryContext.SaveChangesAsync();
            return category;
        }
    }
}
