using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using WebAPICore.API.Services;
using WebAPICore.Models;

namespace WebAPICore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly IRoleRepository _roleRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<UsersController> _logger;
        /// <summary>
        /// load roles without input params from dbContext
        /// url:http://localhost:44304/roles
        /// </summary>
        /// <param name="roleRepository"></param>
        /// <param name="mapper"></param>
        /// <param name="logger"></param>
        public RolesController(IRoleRepository roleRepository,
            IMapper mapper,ILogger<UsersController> logger)
        {
            _roleRepository = roleRepository ??
                 throw new ArgumentNullException(nameof(roleRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<RoleDTO> GetUsers()
        {
            var rolesFromRepo = _roleRepository.GetRoles();
            var lstRoles = _mapper.Map<IEnumerable<RoleDTO>>(rolesFromRepo);
            return   lstRoles;
        }
       
    }
}
