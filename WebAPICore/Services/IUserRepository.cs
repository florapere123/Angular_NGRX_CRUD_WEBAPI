using WebAPICore.Entities;
using System;
using System.Collections.Generic;
using WebAPICore.Models.Specifications;

namespace WebAPICore.API.Services
{
    public interface IUserRepository
    {    
        IEnumerable<User> GetUsers();
        IEnumerable<User> GetUsersBySeacrhCriterias(UserSearchCriterias criterias);
        User  GetUser(string Id);
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(User user);
 
        bool UserExists(string Id);
        bool Save();
    }
}
