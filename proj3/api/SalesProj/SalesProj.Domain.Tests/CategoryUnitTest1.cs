using FluentAssertions;
using SalesProj.Domain.Entities;
using System;
using Xunit;

namespace SalesProj.Domain.Tests
{
    public class CategoryUnitTest1
    {
        [Fact(DisplayName = "Create Category With Valid State")]
        public void CreateCategory_WithValidParameters_ResultObjectValidState()
        {
            Action action = () => new Category(1, "Category Name");
            action.Should()
                .NotThrow<SalesProj.Domain.Validation.DomainExceptionValidation>();
        }

        [Fact(DisplayName = "Create Category With Name Length Less Than 3 Characters")]
        public void CreateCategory_WithNameLessThanThreeChars_ResultObjectInvalidState()
        {
            Action action = () => new Category(1, "Ca");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid name! Min. of 3 characters.");
        }

        [Fact(DisplayName = "Create Category With Negative Id")]
        public void CreateCategory_WithNegativeIdValur_DomainExceptionInvalidId()
        {
            Action action = () => new Category(-1, "Category Name");
            action.Should()
                .Throw<SalesProj.Domain.Validation.DomainExceptionValidation>()
                .WithMessage("Invalid id value!");
        }
    }
}