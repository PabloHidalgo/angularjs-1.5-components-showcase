var faker = require('faker');

module.exports = function() {
	var teachers = createTeachers();
	var courses = createCourses(teachers);

	var data = {
		teachers: teachers,
		courses: courses
	};

	return data;
};

function createTeachers() {
	return [];
}

function createCourses(teachers) {
	var courses = [];

	for ( var i = 0; i < faker.random.number(50) + 15; i++ ) {
		var enrolled = faker.random.boolean();
		var liked = faker.random.boolean();

		var course = {
			id: faker.random.uuid(),
			title: faker.lorem.sentence(8),
			subtitle: faker.lorem.sentence(),
			content: faker.lorem.paragraphs(faker.random.number(2) + 1),
			author: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'), //todo: deprecate in favor of teacher
			image: faker.image.image(340, 150, true),
			likes: faker.random.number(100), //todo: link with students faker data
			liked: liked,
			enrolls: faker.random.number(100), //todo: link with students faker data
			enrolled: enrolled
		};

		courses.push(course);
	}

	return courses;
}

/*
  var data = { users: [] }
  // Create 1000 users
  for (var i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: 'user' + i })
  }
  return data
*/
