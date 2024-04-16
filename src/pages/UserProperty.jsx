import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";
export default function UserProperty() {
  return (
    <div className="my-10">
      <Helmet>
        <title>ARNA Client Property</title>
      </Helmet>
      <div className="border-b-[4px]">
        <h1 className="text-center lg:text-4xl text-xl font-bold lg:py-4 py-2">
          Your Property
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-5 lg:mt-10">
        <div className="mx-auto " data-aos="zoom-in-down">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              className="bg-cover bg-center"
              image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxob3RlbHN8ZW58MHx8MHx8fDA%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mountain Retreat Lodge
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover rustic charm at Mountain Retreat Lodge. Surrounded by
                majestic peaks, our lodge offers a cozy ambiance and
                adventure-filled escapades for nature enthusiasts.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </div>
        <div className="mx-auto" data-aos="zoom-in-down">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1549109786-eb80da56e693?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxob3RlbHN8ZW58MHx8MHx8fDA%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ocean Breeze Hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Embrace coastal luxury at Ocean Breeze Hotel. With panoramic
                ocean vistas and lavish amenities, indulge in seaside relaxation
                and unparalleled hospitality.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </div>
        <div className="mx-auto" data-aos="zoom-in-down">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Golden Sands Resort
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Escape to paradise at Golden Sands Resort. Set along pristine
                beaches, our resort offers unparalleled comfort, gourmet dining,
                and endless water activities for a memorable vacation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </div>{" "}
        <div className="mx-auto" data-aos="zoom-in-down">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1534014963325-599a7fdebdf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxob3RlbHN8ZW58MHx8MHx8fDA%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Royal Palace Hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Indulge in regal elegance at Royal Palace Hotel. With opulent
                suites, exquisite dining, and personalized service, experience
                luxury fit for royalty.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </div>{" "}
        <div className="mx-auto" data-aos="zoom-in-down">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Azure Sky Resort
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Soar to new heights of relaxation at Azure Sky Resort. With
                azure skies above and verdant landscapes below, our resort
                offers a tranquil oasis for rejuvenation and adventure.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </div>{" "}
        <div className="mx-auto" data-aos="zoom-in-down">
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1570900808791-d530855f79e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tranquil Waters Lodge
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Surrender to serenity at Tranquil Waters Lodge. Located beside a
                tranquil lake, our lodge offers cozy cabins, waterfront dining,
                and outdoor adventures for a blissful retreat.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
