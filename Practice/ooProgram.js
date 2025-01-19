class Member {
  constructor(name, membershipType = "Standard") {
    this.name = name;
    this.membershipType = membershipType;
    this.workouts = [];  // Holds the member's workouts
    this.balanceDue = 50; // Default fee (can be customized per gym)
  }

  logWorkout(workout) {
    this.workouts.push(workout);
    console.log(`Workout for ${this.name} logged: ${workout.details}`);
  }

  displayWorkouts() {
    console.log(`${this.name}'s Workouts:`);
    if (this.workouts.length === 0) {
      console.log("No workouts logged.");
    } else {
      this.workouts.forEach((workout, index) => {
        console.log(`${index + 1}: ${workout.details} on ${workout.date}`);
      });
    }
  }

  chargeFee() {
    if (this.balanceDue > 0) {
      console.log(`${this.name} has been charged $${this.balanceDue}.`);
      this.balanceDue = 0; // Clear balance after payment
    } else {
      console.log(`${this.name} has no balance due.`);
    }
  }
}


class Workout {
  constructor(details, date = new Date().toLocaleString()) {
    this.details = details; // e.g., "Cardio - 30 minutes"
    this.date = date; // The date of the workout
  }
}


class ClassSchedule {
  constructor(className, description, schedule) {
    this.className = className; // e.g., "Yoga"
    this.description = description; // e.g., "Relaxing and stretching exercises"
    this.schedule = schedule; // e.g., "Monday, Wednesday, Friday at 7:00 AM"
    this.enrolledMembers = []; // Members enrolled in this class
  }

  enrollMember(member) {
    if (!this.enrolledMembers.includes(member)) {
      this.enrolledMembers.push(member);
      console.log(`${member.name} has been enrolled in ${this.className}.`);
    } else {
      console.log(`${member.name} is already enrolled in ${this.className}.`);
    }
  }

  listEnrolledMembers() {
    console.log(`Members enrolled in ${this.className}:`);
    this.enrolledMembers.forEach(member => {
      console.log(member.name);
    });
  }
}



