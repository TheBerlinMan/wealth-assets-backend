## Start Up

Download Repo
```
git clone https://github.com/TheBerlinMan/wealth-assets-backend.git
cd wealth-assets-backend
npm install
```

04/22/25 - I realized today that I did not include the environment variables in my original submission. I'm so sorry - I hope that you still consider my submission...
Create Env File:
```
touch .env

# copy and paste database connection string into newly created env
# the connection string is for a temporary user with limited read access to the specific collection - will be deleted after one week

DATABASE_URL=<shared via email> 
```

Start Server:
```
node server.js
```



Frontend Repo: https://github.com/TheBerlinMan/wealth-assets-frontend
