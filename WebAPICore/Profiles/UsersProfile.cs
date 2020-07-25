using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPICore.API.Profiles
{
    public class RolesProfile : Profile
    {
        public RolesProfile()
        {
            CreateMap<Entities.Role, Models.RoleDTO>()
                .ForMember(
                    dest => dest.Id, 
                    opt => opt.MapFrom(src => src.Code));

            CreateMap<Models.RoleDTO, Entities.Role>();
        }
    }
}
