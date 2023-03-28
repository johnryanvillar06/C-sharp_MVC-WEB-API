using Final_Movie_Rental.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Final_Movie_Rental.Controllers
{
    public class MoviesController : ApiController
    {
        private MovieContext _context;

        public MoviesController()
        {
            _context = new MovieContext();
        }

        // GET api/movies
        public IEnumerable<Movy> Get()
        {
            return _context.Movies.ToList();
        }

        // GET api/movies/5
        public Movy Get(int id)
        {
            return _context.Movies.SingleOrDefault(m => m.Id == id);
        }

        // POST api/movies
        public void Post([FromBody] Movy movie)
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();
        }

        // PUT api/movies/5
        public void Put(int id, [FromBody] Movy movie)
        {
            var movieInDb = _context.Movies.SingleOrDefault(m => m.Id == id);

            if (movieInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            movieInDb.Title = movie.Title;
            movieInDb.Genre = movie.Genre;
            movieInDb.ReleaseDate = movie.ReleaseDate;
            movieInDb.Price = movie.Price;

            _context.SaveChanges();
        }

        // DELETE api/movies/5
        public void Delete(int id)
        {
            var movieInDb = _context.Movies.SingleOrDefault(m => m.Id == id);

            if (movieInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            _context.Movies.Remove(movieInDb);
            _context.SaveChanges();
        }
    }
}
