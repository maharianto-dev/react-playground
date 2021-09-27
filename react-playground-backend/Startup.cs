using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using react_playground_backend.Models;
using react_playground_backend.Services;

namespace react_playground_backend
{
    public class Startup
    {
        readonly string ReactFrontendAllowSpecificOrigins = "_reactFrontendAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
        {
            options.AddPolicy(name: ReactFrontendAllowSpecificOrigins,
                              builder =>
                              {
                                  builder.WithOrigins("*")
                                  .AllowAnyHeader()
                                  .AllowAnyMethod();
                              });
        });

            services.Configure<ReactPlaygroundDBDatabaseSettings>(Configuration.GetSection(nameof(ReactPlaygroundDBDatabaseSettings)));

            services.AddSingleton<IReactPlaygroundDBDatabaseSettings>(sp => sp.GetRequiredService<IOptions<ReactPlaygroundDBDatabaseSettings>>().Value);

            services.AddSingleton<TestCollection1Service>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "react_playground_backend", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "react_playground_backend v1"));
            }
            
            app.UseCors(ReactFrontendAllowSpecificOrigins);

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
