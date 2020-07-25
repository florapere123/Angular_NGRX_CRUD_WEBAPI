using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPICore.API.Profiles
{
    public class UsersProfile : Profile
    {
        public UsersProfile()
        {
            CreateMap<Entities.User, Models.UserDTO>()
                .ForMember(
                    dest => dest.RoleDescription, 
                    opt => opt.MapFrom(src => $"{src.RoleNavigation.Description}"));

            CreateMap<Models.UserDTO, Entities.User>();
        }
    }
}
