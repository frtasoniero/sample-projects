using AutoMapper;
using SalesProj.Application.DTOs;
using SalesProj.Application.Interfaces;
using SalesProj.Domain.Entities;
using SalesProj.Domain.Interfaces;

namespace SalesProj.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private ICategoryRepository _categoryRepository;
        private IMapper _mapper;

        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task Add(CategoryDTO categoryDTO)
        {
            var categoryEntity = _mapper.Map<Category>(categoryDTO);

            await _categoryRepository.CreateAsync(categoryEntity);
        }

        public async Task<CategoryDTO> GetById(int? id)
        {
            var categoryEntity = await _categoryRepository.GetCategoryByIdAsync(id);

            return _mapper.Map<CategoryDTO>(categoryEntity);
        }

        public async Task<IEnumerable<CategoryDTO>> GetCategories()
        {
            var categoriesEntity = await _categoryRepository.GetCategoriesAsync();

            return _mapper.Map<IEnumerable<CategoryDTO>>(categoriesEntity);
        }

        public async Task Remove(int? id)
        {
            var categoryEntity = _categoryRepository.GetCategoryByIdAsync(id).Result;

            await _categoryRepository.RemoveAsync(categoryEntity);
        }

        public async Task Update(CategoryDTO categoryDTO)
        {
            var categoryEntity = _mapper.Map<Category>(categoryDTO);

            await _categoryRepository.UpdateAsync(categoryEntity);
        }
    }
}
