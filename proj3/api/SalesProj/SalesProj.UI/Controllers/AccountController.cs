using Microsoft.AspNetCore.Mvc;
using SalesProj.Domain.Account;
using SalesProj.UI.ViewModels;

namespace SalesProj.UI.Controllers
{
    public class AccountController : Controller
    {
        private readonly IAuthenticate _authentication;

        public AccountController(IAuthenticate authenticate)
        {
            _authentication = authenticate;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model) 
        {
            var result = await _authentication.RegisterUserAsync(model.Email, model.Password);

            if (result)
            {
                return Redirect("/");
            }
            else
            {
                ModelState.AddModelError(String.Empty, "Invalid register attempt (password must be strong).");
                return View(model);
            }
        }

        [HttpGet]
        public IActionResult Login(string returnUrl) 
        {
            return View(new LoginViewModel { ReturnUrl = returnUrl });
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            var result = await _authentication.AuthenticateAsync(model.Email, model.Password);
            
            if (result)
            {
                if (String.IsNullOrEmpty(model.ReturnUrl))
                {
                    return RedirectToAction("Index", "Home");
                }

                return Redirect(model.ReturnUrl);
            }
            else
            {
                ModelState.AddModelError(String.Empty, "Invalid login attempt.(Password must be strong).");
                return View(model);
            }
        }
        public async Task<IActionResult> Logout()
        {
            await _authentication.LogoutAsync();
            return Redirect("/Account/Login");
        }
    }
}
