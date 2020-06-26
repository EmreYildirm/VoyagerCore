using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using VoyageCore.DAL.Repositories;
using VoyagerCore.BLL;
using VoyagerCore.BLL.IServices;
using VoyagerCore.BLL.Services;
using VoyagerCore.DAL;
using VoyagerCore.DAL.Repositories;
using VoyagerCore.DAL.UnitOfWork;

namespace VoyagerCore.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddScoped<IBusService, BusService>();
            services.AddScoped<IDriverService, DriverService>();
            services.AddScoped<IExpeditionService, ExpeditionService>();
            services.AddScoped<IHostService, HostService>();
            services.AddScoped<IPassengerService, PassengerService>();
            services.AddScoped<IRouteService, RouteService>();
            services.AddScoped<ITicketService, TicketService>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddScoped<IBusRepository, BusRepository>();
            services.AddScoped<IDriverRepository, DriverRepository>();
            services.AddScoped<IExpeditionRepository, ExpeditionRepository>();
            services.AddScoped<IHostRepository, HostRepository>();
            services.AddScoped<IPassengerRepository, PassengerRepository>();
            services.AddScoped<IRouteRepository, RouteRepository>();
            services.AddScoped<ITicketRepository, TicketRepository>();

            services.AddScoped<VoyagerContext, VoyagerContext>();
            #region DbContext
            services.AddDbContext<VoyagerContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            #endregion
            services.AddMvc();

            services.AddControllersWithViews();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
