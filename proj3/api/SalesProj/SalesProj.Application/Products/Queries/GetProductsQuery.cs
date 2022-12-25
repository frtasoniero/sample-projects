using MediatR;
using SalesProj.Domain.Entities;

namespace SalesProj.Application.Products.Queries
{
    public class GetProductsQuery : IRequest<IEnumerable<Product>>
    {

    }
}
