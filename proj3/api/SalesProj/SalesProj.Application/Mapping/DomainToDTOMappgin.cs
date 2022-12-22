using AutoMapper;
using SalesProj.Application.DTOs;
using SalesProj.Domain.Entities;

namespace SalesProj.Application.Mapping
{
    public class DomainToDTOMappgin : Profile
    {
        public DomainToDTOMappgin() 
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}
