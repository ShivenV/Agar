<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ShivenV/Agar">
    <img src="images/app.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Agar</h3>

  <p align="center">
    A machine learning app based around COVID-19
    <br />
    <br />
    <a href="https://github.com/ShivenV/Agar/issues">Report Bug</a>
    ·
    <a href="https://github.com/ShivenV/Agar/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#more-details">More Details</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/ShivenV/Agar)

2.6 million. That is the number of people who have died from the worldwide virus known as COVID-19 or more commonly known as Coronavirus. This virus has been deadly, no doubt about that. It started in February of 2020, and most people thought that it would have ended by the summer, or at the most by August. And yet, here we are, over a year later, still dealing with the same virus, with little difference in how many people are being infected. This is why I have created Agar, and I think it is one of the best way to stop the spread of COVID.

Here's why:
* It can be easily installed on any device since it is built using the cross platform tech known as React Native.
* Extremely User Friendly and Intuitive Interface.
* Can spice up an otherwise boring process of checking for COVID :smile:

Of course, no one app can completely solve the entire issue, but if I can make an app that can help solve a majority of the problems, then I would consider that as a success.

## More Details

A General Overview: 
![image](https://user-images.githubusercontent.com/53873526/113066072-e7c51f00-9187-11eb-913b-3c50a87b13a4.png)

Let's go into more detail: 

### Step 1: Sending the image.

![](https://media.giphy.com/media/CwDwQjQty3RL95LUi5/giphy.gif)

This is the most important part of the entire transaction between the user and the app because without this, the app will not function. There are two ways to send an image to the server, the first way is through taking a picture with the camera, and the second way is through uploading a photo on your phone. I was only able to test it by uploading it on the phone as I have to run this app on an emulator.

### Step 2: Processing the image. 

This is probably second on the list of importance as this is needed in order for the machine learning algorithm to be able to do anything. Without this, there is not a lot for the algorithm to do. From a high level, this step just involves the algorithm encoding the image, and then running a machine learning algorithm to see whether or not is matches a face. If it does match to a face, it will then continue on to checking the JSON database which simply has the names and their results, and will collect both of those.

### Step 3: Receiving the info.

![image](https://media.giphy.com/media/Zk3msZ0Aw8097v4sJi/giphy.gif)

Finally, after all the processing is done, the backend server will send back the Name and the Result to the app, which will then inform the user with an alert on what the app has made of what they have uploaded.

And now, the entire process, but this time with a different face!

![image](https://media.giphy.com/media/UsnvnAaa7f5lgchzQg/giphy.gif)

### Built With

* [React Native](https://reactnative.dev/)
* [Python](https://www.python.org/)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Shiven Verma - shivenverma26@gmail.com or vermas@uscstudents.org

Project Link: [github.com/ShivenV/Agar](https://github.com/ShivenV/Agar)

[product-screenshot]: images/app.png
