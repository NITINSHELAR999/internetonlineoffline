import React from "react";
import { Offline, Online } from "react-detect-offline";

function Home() {
  return (
    <main>
     <Online>
     <h1> welcome here lets do coding here </h1>
       <img src ="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?bEhcYQAShJnLf0Mtu4JYq8YzICfhz2rB&size=770:433" height='35%' width='50%'/>
     </Online>
    <Offline> 
    <h1>  Oops Check your internet connection  , U wented Offline  Turn On Your Data</h1>
       <img src ="https://cdn.geckoandfly.com/wp-content/uploads/2013/03/530-internet-connection-error.jpg" height='35%' width='50%'/>
    </Offline>
    </main>
  );
}

export default Home;
