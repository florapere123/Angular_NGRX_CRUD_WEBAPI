using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPICore.API.Services;
using WebAPICore.DbContexts;
using WebAPICore.Entities;
using WebAPICore.Models;
using WebAPICore.Models.Specifications;

namespace WebAPICore.Controllers
{
    /// <summary>
    /// controller for user crud operations and search
    /// url:http://localhost:44304/users
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<UsersController> _logger;

        public UsersController(IUserRepository userRepository,
            IMapper mapper,ILogger<UsersController> logger)
        {
            _userRepository = userRepository ??
                 throw new ArgumentNullException(nameof(userRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<UserDTO> GetUsers()
        {
            var usersFromRepo = _userRepository.GetUsers();
            var lstUser = _mapper.Map<IEnumerable<UserDTO>>(usersFromRepo);
            return lstUser; 
        }
        [HttpPost]
        [Route("GetUsersBySeacrhCriterias")]
        public IEnumerable<UserDTO> GetUsersBySeacrhCriterias(UserSearchCriterias criterias)
        {
            var usersFromRepo = _userRepository.GetUsersBySeacrhCriterias(criterias);
            var lstUser = _mapper.Map<IEnumerable<UserDTO>>(usersFromRepo);
            return lstUser;

        }

        [HttpGet("{Id}")]
        public UserDTO GetUser(string Id)
        {
            var usersFromRepo = _userRepository.GetUser(Id);
            var curreentUser = _mapper.Map<UserDTO>(usersFromRepo);
            return curreentUser;
            
        }
    }
}
