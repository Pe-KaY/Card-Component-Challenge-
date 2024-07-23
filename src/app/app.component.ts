import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Ecommerce
  category1 = 'Ecommerce';
  sneakerTitle = 'Jordan Proto-Lyte';
  sneakerDescription =
    'featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.';
  sneakerButton = 'Buy Now';
  productImg = 'https://i.ebayimg.com/images/g/WfEAAOSwyVVkGJ7I/s-l1600.jpg';

  // news
  category2 = 'News Article';
  newsTitle = 'CrowdStrike Update';
  newsDiscription =
    'The glitch came from a security company called CrowdStrike which sent out a corrupted software update to its huge number of customers.Over 1,000 flights into, within or out of the United States were canceled Monday, and over 9,000 were delayed, according to flight tracking site FlightAware. Delta passengers have been slammed by more than 4,400 cancellations since Friday, including more than 950 as of Monday evening...';
  newsButton = 'Read More';
  newsImglink =
    'https://imageio.forbes.com/specials-images/imageserve/669aab967f2e7150b7fcfd35/Crowdstrike/960x0.jpg?height=474&width=711&fit=bounds';

  // profile
  category3 = 'Profile';
  profileTitle = 'Shantel Konadu';
  profileDescription =
    'Bio: Passionate web developer with experience in creating dynamic and responsive websites and web applications. Skilled in HTML, CSS, JavaScript, Angular, and Node.js. Strong problem-solving abilities and a keen eye for detail. Committed to delivering high-quality code and exceptional user experiences.';
  profileButton = 'Contact Me';
  profileImg =
    'https://plus.unsplash.com/premium_photo-1661508557554-e3d96f2fdde5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D';

  //Event
  category4 = 'Event';
  eventTitle = 'Worship Sunday';
  eventDescription =
    'Join us for a special worship event this Sunday at 10 AM at Prime Church. Experience uplifting music, inspiring messages, and a welcoming community. All are welcome to attend and celebrate together. Dont Miss This Event!';
  eventButton = 'RSVP';
  eventImg =
    'https://www.josh.org/main/wp-content/uploads/sites/607/2020/11/changed-by-our-worship.jpg';
}
