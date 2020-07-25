using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WebAPICore.API.Services;
using WebAPICore.DbContexts;
using WebAPICore.Entities;
using WebAPICore.Models.Specifications;

namespace WebAPICore.API.Services
{
    public class UserRepository : IUserRepository
    {
        private readonly UsersDBContext _context;

        public UserRepository(UsersDBContext context )
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        
  

      

       
        /// <summary>
        /// loads all users with navigation property of role description
        /// </summary>
        /// <returns></returns>
        public IEnumerable<User> GetUsers()
        {
            _context.Roles.Load();
            var users= _context.Users.Include(r=>r.RoleNavigation).ToList<User>();
            return users;
        }
         
        public IEnumerable<User> GetUsersBySeacrhCriterias(UserSearchCriterias searchCriterias)
        {
            if (searchCriterias == null)
            {
                throw new ArgumentNullException(nameof(searchCriterias));
            }

            if (!searchCriterias.RoleId.HasValue
                 && string.IsNullOrWhiteSpace(searchCriterias.UserName))
            {
                return GetUsers();
            }
            _context.Roles.Load();
            var searchedUsers = _context.Users.Include(r => r.RoleNavigation) as IQueryable<User>;

            if (searchCriterias.RoleId.HasValue)
            {
                searchedUsers = searchedUsers.Where(u => u.Role == searchCriterias.RoleId);
            }
            if (!String.IsNullOrEmpty(searchCriterias.UserName))
            {
                searchedUsers = searchedUsers.Where(u => u.UserName == searchCriterias.UserName.Trim());
            }
           
            return searchedUsers.ToList<User>();
        }
        public  User  GetUser(string Id)
        {
            _context.Roles.Load();
            var _user  =  _context.Users.Include(r => r.RoleNavigation).Where(u=>u.Id == Id);
            if (_user!=null && _user.Count() == 1)
            {
                return _user.First();
            }
            return null;
        }

        /// <summary>
        /// checks if user  exist
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public bool UserExists(string Id)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == Id);
            return user != null ? true : false;
        }
        /// <summary>
        /// not implemnted yet
        /// </summary>
        /// <param name="user"></param>
        public void AddUser(User user)
        {

            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            _context.Users.Add(user);
        }
        /// <summary>
        /// not implemented for now
        /// </summary>
        /// <param name="user"></param>
        public void UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// not implemented for now
        /// </summary>
        /// <param name="user"></param>
        public void DeleteUser(User user)
        {
            throw new NotImplementedException();
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
