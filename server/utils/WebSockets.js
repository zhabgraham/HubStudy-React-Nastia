class WebSockets {
    students = [];
    mentors = [];
  
    connection(client) {
      // event fired when the chat room is disconnected
      client.on("disconnect", () => {
        this.students = this.students.filter((student) => student.socketId !== client.id);
        this.mentors = this.mentors.filter((mentor) => mentor.socketId !== client.id);
      });
  
      // add identity of student mapped to the socket id
      client.on("studentIdentity", (studentId) => {
        this.students.push({
          socketId: client.id,
          studentId: studentId,
        });
      });
  
      // add identity of mentor mapped to the socket id
      client.on("mentorIdentity", (mentorId) => {
        this.mentors.push({
          socketId: client.id,
          mentorId: mentorId,
        });
      });
  
      // subscribe student or mentor to a chat room & other user as well
      client.on("subscribe", (room, userType, otherUserId = "") => {
        if (userType === "student") {
          this.subscribeMentor(room, otherUserId);
        } else if (userType === "mentor") {
          this.subscribeStudent(room, otherUserId);
        }
        client.join(room);
      });
  
      // mute a chat room
      client.on("unsubscribe", (room) => {
        client.leave(room);
      });
    }
  
    subscribeStudent(room, mentorId) {
      const mentorSockets = this.mentors.filter((mentor) => mentor.mentorId === mentorId);
      mentorSockets.forEach((mentorInfo) => {
        const socketConn = global.io.sockets.connected(mentorInfo.socketId);
        if (socketConn) {
          socketConn.join(room);
        }
      });
    }
  
    subscribeMentor(room, studentId) {
      const studentSockets = this.students.filter((student) => student.studentId === studentId);
      studentSockets.forEach((studentInfo) => {
        const socketConn = global.io.sockets.connected(studentInfo.socketId);
        if (socketConn) {
          socketConn.join(room);
        }
      });
    }
  }
  
  export default new WebSockets();
  