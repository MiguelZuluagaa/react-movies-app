const API = "https://api.themoviedb.org/3"
export function get(path){
     return fetch(API+path,{
          headers: {
               Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTVhMTM3NTkwMzY1M2FmNWNjMGFhNTY3OWIxNmZiMyIsInN1YiI6IjY0MzYyNWMxOWFjNTM1MDBlMzY1ZTc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3Wiy1xfMsoGrWFKzSFw0HQQNugAZRHOU46OCg-FW7s",
               "Content-Type": "application/json;chartset=utf-8"
          }
     }).then((result) => result.json())
}