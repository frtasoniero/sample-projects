using FluentAssertions;
using SalesProj.Domain.Entities;
using System;
using Xunit;

namespace SalesProj.Domain.Tests
{
    public class ProductUnitTest1
    {
        [Fact(DisplayName = "Create Product With Valid State")]
        public void CreateProduct_WithValidParameters_ResultObjectValidState()
        {
            Action action = () => new Product(1, "Product Name", "Description", 7.99m, 12, "Image Name");
            action.Should()
                .NotThrow<SalesProj.Domain.Validation.DomainExceptionValidation>();
        }

        [Fact(DisplayName = "Create Product With Name Length Less Than 3 Characters")]
        public void CreateProduct_WithNameLessThanThreeChars_ResultObjectInvalidState()
        {
            Action action = () => new Product(1, "Pr", "Description", 7.99m, 12, "Image Name");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid name! Min. of 3 characters.");
        }

        [Fact(DisplayName = "Create Product With Description Length Less Than 3 Characters")]
        public void CreateProduct_WithDescriptionLessThanThreeChars_ResultObjectInvalidState()
        {
            Action action = () => new Product(1, "Product", "De", 7.99m, 12, "Image Name");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid description! Min. of 3 characters.");
        }

        [Fact(DisplayName = "Create Product With Image Name Length Bigger Than 255 Characters")]
        public void CreateProduct_WithImageNameTooBig_ResultObjectInvalidState()
        {
            Action action = () => new Product(1, "Product", "Description", 7.99m, 12, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid image name! Max. of 255 characters.");
        }

        [Theory(DisplayName = "Create Product With Invalid Price Value")]
        [InlineData(-7.99)]
        public void CreateProduct_WithInvalidPriceValue_DomainExceptionInvalidPrice(decimal value)
        {
            Action action = () => new Product(1, "Product", "Description", value, 12, "Image Name");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid price value!");
        }

        [Theory(DisplayName = "Create Product With Invalid Stock Value")]
        [InlineData(-12)]
        public void CreateProduct_WithInvalidStockValue_DomainExceptionInvalidStock(int value)
        {
            Action action = () => new Product(1, "Product", "Description", 7.99m, value, "Image Name");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid stock value!");
        }

        [Fact(DisplayName = "Create Product With Negative Id")]
        public void CreateProduct_WithNegativeIdValue_DomainExceptionInvalidId()
        {
            Action action = () => new Product(-1, "Product Name", "Description", 7.99m, 12, "Image Name");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid id value!");
        }
    }
}