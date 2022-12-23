using AutoMapper;
using SalesProj.Application.DTOs;
using SalesProj.Domain.Entities;

namespace SalesProj.Application.Mapping
{
    public class DomainToDTOMapping : Profile
    {
        public DomainToDTOMapping() 
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}
