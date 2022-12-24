﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SalesProj.Application.DTOs;
using SalesProj.Application.Interfaces;
using SalesProj.Application.Services;

namespace SalesProj.UI.Controllers
{
    public class ProductsController : Controller
    {
        private IProductService _productService;
        private ICategoryService _categoryService;
        private readonly IWebHostEnvironment _environment;

        public ProductsController(IProductService productService, ICategoryService categoryService, IWebHostEnvironment environment)
        {
            _productService = productService;
            _categoryService = categoryService;
            _environment = environment;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var products = await _productService.GetProducts();
            return View(products);
        }

        [HttpGet()]
        public async Task<IActionResult> Create()
        {
            ViewBag.CategoryId = new SelectList(await _categoryService.GetCategories(), "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(ProductDTO product)
        {
            if (ModelState.IsValid)
            {
                await _productService.Add(product);
                return RedirectToAction(nameof(Index));
            }
            return View(product);
        }

        [HttpGet()]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) { return NotFound(); }

            var productDto = await _productService.GetById(id);

            if (productDto == null) { return NotFound(); }

            var categories = await _categoryService.GetCategories();
            ViewBag.CategoryId = new SelectList(categories, "Id", "Name", productDto.CategoryId);

            return View(productDto);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(ProductDTO product)
        {
            if (ModelState.IsValid)
            {
                await _productService.Update(product);
                return RedirectToAction(nameof(Index));
            }
            return View(product);
        }

        [HttpGet()]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) { return NotFound(); }

            var productDto = await _productService.GetById(id);

            if (productDto == null) { return NotFound(); }

            return View(productDto);
        }

        [HttpPost(), ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            await _productService.Remove(id);
            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var productDto = await _productService.GetById(id);

            if (productDto == null) return NotFound();

            var wwwroot = _environment.WebRootPath;
            var image = Path.Combine(wwwroot, "images\\" + productDto.Image);
            var exists = System.IO.File.Exists(image);

            ViewBag.ImageExist = exists;

            return View(productDto);
        }
    }
}