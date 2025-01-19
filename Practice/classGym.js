class Gym {
  constructor(name, location, membershipFee) {
    this.name = name; // Name of the gym
    this.location = location; // Location of the gym
    this.membershipFee = membershipFee; // Monthly membership fee
    this.members = []; // List of members
    this.classes = {}; // Gym classes and their schedules
  }

  // Method to add a new member with optional membership type
  addMember(memberName, membershipType = "Standard") {
    if (!this.members.find(member => member.name === memberName)) {
      const newMember = {
        name: memberName,
        membershipType,
        workouts: [], // Track member workouts
        balanceDue: this.membershipFee, // Initial balance due
      };
      this.members.push(newMember);
      console.log(`${memberName} has joined ${this.name} as a ${membershipType} member.`);
    } else {
      console.log(`${memberName} is already a member.`);
    }
  }

  // Method to remove a member
  removeMember(memberName) {
    const memberIndex = this.members.findIndex(member => member.name === memberName);
    if (memberIndex !== -1) {
      this.members.splice(memberIndex, 1);
      console.log(`${memberName} has been removed from ${this.name}.`);
    } else {
      console.log(`${memberName} is not a member.`);
    }
  }

  // Method to list all members
  listMembers() {
    if (this.members.length > 0) {
      console.log(`Members of ${this.name}:`);
      this.members.forEach(member => {
        console.log(`${member.name} (${member.membershipType} member)`);
      });
    } else {
      console.log(`No members in ${this.name}.`);
    }
  }

  // Method to track a workout for a member
  logWorkout(memberName, workoutDetails) {
    const member = this.members.find(member => member.name === memberName);
    if (member) {
      member.workouts.push(workoutDetails);
      console.log(`Workout for ${memberName} logged: ${workoutDetails}`);
    } else {
      console.log(`${memberName} is not a member.`);
    }
  }

  // Method to display workouts for a member
  displayWorkouts(memberName) {
    const member = this.members.find(member => member.name === memberName);
    if (member && member.workouts.length > 0) {
      console.log(`Workouts for ${memberName}:`);
      member.workouts.forEach((workout, index) => {
        console.log(`${index + 1}. ${workout}`);
      });
    } else {
      console.log(`${memberName} has no logged workouts.`);
    }
  }

  // Method to add a class to the gym schedule
  addClass(className, schedule) {
    if (!this.classes[className]) {
      this.classes[className] = schedule;
      console.log(`${className} has been added to the schedule.`);
    } else {
      console.log(`${className} is already in the schedule.`);
    }
  }

  // Method to list all gym classes and their schedules
  listClasses() {
    if (Object.keys(this.classes).length > 0) {
      console.log("Gym Classes Schedule:");
      for (const [className, schedule] of Object.entries(this.classes)) {
        console.log(`${className}: ${schedule}`);
      }
    } else {
      console.log("No classes scheduled.");
    }
  }

  // Method to check the balance due for a member
  checkBalance(memberName) {
    const member = this.members.find(member => member.name === memberName);
    if (member) {
      console.log(`${memberName}'s balance: $${member.balanceDue}`);
    } else {
      console.log(`${memberName} is not a member.`);
    }
  }

  // Method to charge a member's fee
  chargeFee(memberName) {
    const member = this.members.find(member => member.name === memberName);
    if (member) {
      member.balanceDue = 0; // Clear balance after charging fee
      console.log(`${memberName}'s membership fee of $${this.membershipFee} has been charged.`);
    } else {
      console.log(`${memberName} is not a member.`);
    }
  }
}

// Example usage:

const gym1 = new Gym("SuperFit Gym", "Downtown", 50);

// Adding members with different membership types
gym1.addMember("Alice", "Premium");
gym1.addMember("Bob", "Standard");
gym1.addMember("Charlie");

// Adding gym classes
gym1.addClass("Yoga", "Monday, Wednesday, Friday at 7:00 AM");
gym1.addClass("Pilates", "Tuesday, Thursday at 6:00 PM");

// Listing gym classes
gym1.listClasses();

// Logging workouts for members
gym1.logWorkout("Alice", "1 hour cardio");
gym1.logWorkout("Bob", "30-minute strength training");

// Displaying workouts for members
gym1.displayWorkouts("Alice");
gym1.displayWorkouts("Bob");

// Checking balance and charging fee
gym1.checkBalance("Alice");
gym1.chargeFee("Alice");

// Listing all members
gym1.listMembers();
