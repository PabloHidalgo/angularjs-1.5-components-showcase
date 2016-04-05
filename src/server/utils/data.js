var faker = require('faker');
var truncate = require('truncate');

module.exports = function() {
	var students = createStudents();
	var teachers = createTeachers(students);
	var courses = createCourses(students, teachers);

	var data = {
		students: students,
		teachers: teachers,
		courses: courses
	};

	return data;
};

function createStudents() {
	var students = [];

	for ( var i = 0; i < faker.random.number(100) + 25; i++ ) {
		var gender = ( faker.random.boolean() ) ? 'women' : 'men';

		var student = {
			id: faker.random.uuid(),
			name: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
			image: createPortraitImageUrl(gender)
		};

		students.push(student);
	}

	return students;
}

function createTeachers(students) {
	var teachers = [];

	for ( var i = 0; i < faker.random.number(100) + 25; i++ ) {
		var gender = ( faker.random.boolean() ) ? 'women' : 'men';

		var teacher = {
			id: faker.random.uuid(),
			name: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
			image: createPortraitImageUrl(gender),
			likes: parseTeacherLikes(students)
		};

		teachers.push(teacher);
	}

	return teachers;
}

function parseTeacherLikes(students) {
	var result = 0;

	//we run through each student
	for ( var i = 0; i < students.length; i++ ) {
		if ( faker.random.number(5) <= 1 ) break;
		if ( faker.random.boolean() ) { result++; }
	}

	return result;
}

function createCourses(students, teachers) {
	var courses = [];

	for ( var i = 0; i < faker.random.number(50) + 15; i++ ) {
		var likes = faker.random.number(100);
		var liked = ( likes > 0 ) ? faker.random.boolean() : false;

		var enrolls = faker.random.number(100);
		var enrolled = ( enrolls > 0 ) ? faker.random.boolean() : false;

		var course = {
			id: faker.random.uuid(),
			title: faker.lorem.sentence(2),
			subtitle: faker.lorem.sentence(),
			content: truncate(faker.lorem.paragraphs(faker.random.number(2) + 1), 65),
			author: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'), //todo: deprecate in favor of teacher
			image: faker.image.image(340, 150, true),
			likes: likes, //todo: link with students faker data
			liked: liked,
			enrolls: enrolls, //todo: link with students faker data
			enrolled: enrolled
		};

		courses.push(course);
	}

	return courses;
}

function createPortraitImageUrl(gender) {
	return 'https://randomuser.me/api/portraits/' + gender + '/' + faker.random.number(100) + '.jpg';
}

/*
  var data = { users: [] }
  // Create 1000 users
  for (var i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: 'user' + i })
  }
  return data
*/
