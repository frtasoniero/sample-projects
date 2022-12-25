using AutoMapper;
using SalesProj.Application.DTOs;
using SalesProj.Application.Products.Commands;

namespace SalesProj.Application.Mapping
{
    public class DTOToCommandMapping : Profile
    {
        public DTOToCommandMapping()
        {
            CreateMap<ProductDTO, ProductCreateCommand>();
            CreateMap<ProductDTO, ProductUpdateCommand>();
        }
    }
}
