﻿// <auto-generated />
using IdGenerator.Infrastructure.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace IdGenerator.Api.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("IdGenerator.Core.Category", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("IdGenerator.Core.Factory", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Factories");
                });

            modelBuilder.Entity("IdGenerator.Core.FactoryParts", b =>
                {
                    b.Property<string>("CategoryId");

                    b.Property<string>("FactoryId");

                    b.Property<int>("CategoryFactoryId");

                    b.Property<DateTime>("CreatedAt");

                    b.HasKey("CategoryId", "FactoryId", "CategoryFactoryId");

                    b.ToTable("UniquePartsIdS");
                });
#pragma warning restore 612, 618
        }
    }
}
