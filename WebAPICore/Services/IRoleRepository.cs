using WebAPICore.Entities;
using System;
using System.Collections.Generic;

namespace WebAPICore.API.Services
{
    /// <summary>
    /// interface for role controller -contains get all method only
    /// </summary>
    public interface IRoleRepository
    {
        IEnumerable<Role> GetRoles(); 
    }
}
