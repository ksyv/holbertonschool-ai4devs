class UserManager {
    constructor() {
        this.users = [];
    }

    processUser(user) {
        console.log(`Processing user: ${user}`);
        this.users.push(user);
    }

    fetchUserAsync() {
        console.log("Fetching user...");
        // Simulation of an API call
        setTimeout(function() {
            const fetchedUser = "JohnDoe";
            this.processUser(fetchedUser);
        }, 1000);
    }
}

const manager = new UserManager();
manager.fetchUserAsync();