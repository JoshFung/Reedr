![Title Mockup](public/Title%20Mockup.png)

![Extra Mockup](public/Extra%20Mockup.png)

# Table of Contents

<!-- <details> -->
  <!-- <summary>Table of Contents</summary> -->
  <ol>
    <li><a href="#what-is-reedr">What is Reedr?</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#accessing-reedr">Accessing Reedr</a></li>
        <li><a href="#running-reedr-locally">Running Reedr Locally</a></li>
      </ul>
    </li>
    <li><a href="#whats-next">What's Next?</a></li>
  </ol>
<!-- </details> -->

## What is Reedr?

Reedr is an alternative reader for Hacker News that is designed to be used on mobile, tablets as well as laptops / desktops.

Specifically designed for quick reading, it makes use of a side feed and reader view to allow users to quickly browse through articles. Furthermore, cascading comments allow readers to skip over filler comments and dive deeper into insightful discussion.

<p align="right">(<a href="#table-of-contents">Back to Table of Contents</a>)</p>

## Built With

- [![Typescript][Typescript]][Typescript-url]
- [![React][React.js]][React-url]
- [![Redux][Redux.js]][Redux-url]
- [![Express][Express.js]][Express-url]
- [![Axios][Axios]][Axios-url]
- [![CSS3][CSS3]][CSS3-url]
- [![Github Actions][Github Actions]][Github-Actions-url]
- [![Docker][Docker]][Docker-url]
- [![AWS-ECR][AWS-ECR]][AWS-ECR-url]
- [![AWS-App-Runner][AWS-App-Runner]][AWS-App-Runner-url]

Frontend built using Typescript, React and Redux.

Backend built using Typescript, Express and Axios.

CI/CD pipeline built using Github Actions.

Deployed using Docker, AWS Elastic Container Registry (ECR) and AWS App Runner.

<p align="right">(<a href="#table-of-contents">Back to Table of Contents</a>)</p>

## Getting Started

### Accessing Reedr

You can directly access Reedr through the following link: [reedr.joshfung.dev](https://reedr.joshfung.dev)

### Running Reedr Locally (with Docker)

1. Make sure you have Docker installed
2. Open a terminal in the root directory and run the following command to build the images:

```sh
docker compose -f ./compose.yaml build --build-arg API_URL="http://host.docker.internal:8000"
```

3. In the same terminal, after the prior command is done running, run the following command to start the containers:

```sh
docker compose up -d
```

4. To stop the containers when you're done, you can run the following in the terminal:

```sh
docker compose down
```

<p align="right">(<a href="#table-of-contents">Back to Table of Contents</a>)</p>

## What's Next?

The following are extra features I have considered implementing next:

- [ ] Lockdown the backend
  - Rather than leaving it publicly accessible, I would like to make it such that only the frontend can access the backend (opted to skip for now as there is no sensitive data nor authentication)
  - [ ] Make use of VPCs and Security Groups to restrict access to the backend
  - [ ] Reverse proxy so client goes through frontend to access backend
- [ ] Improve styling
  - More nitpicking that anything, but I would like to improve the styling of the app
  - [ ] Comments that make use of markdown COULD be styled better to show it's markdown
  - [ ] Links within a comment should be aggregated somewhere in the comment for easier access and organization
  - [ ] Clean up CSS 😔
- [ ] Improve fetching / render times
  - Currently, the app fetches each story and comment individually (due to Hacker News' current API design) -- Could investigate more into this

<p align="right">(<a href="#table-of-contents">Back to Table of Contents</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Typescript]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Express.js]: https://img.shields.io/badge/Express-eee?style=for-the-badge&logo=express&logoColor=black
[Express-url]: https://expressjs.com/
[Axios]: https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/docs/api_intro
[CSS3]: https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3.org/Style/CSS/Overview.en.html
[Github Actions]: https://img.shields.io/badge/Github%20Actions-black?style=for-the-badge&logo=githubactions&logoColor=white
[Github-Actions-url]: https://github.com/features/actions
[Docker]: https://img.shields.io/badge/Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[AWS-ECR]: https://img.shields.io/badge/AWS%20Elastic%20Container%20Registry%20(ECR)-%23232F3E?style=for-the-badge&logo=amazonaws&logoColor=white
[AWS-ECR-url]: https://aws.amazon.com/ecr/
[AWS-App-Runner]: https://img.shields.io/badge/AWS%20App%20Runner-%23FF9900?style=for-the-badge&logo=amazonaws&logoColor=white
[AWS-App-Runner-url]: https://aws.amazon.com/apprunner/
