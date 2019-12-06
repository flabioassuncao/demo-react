import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '.../../../tools/mockData';

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses, ...props }) {
    const [course, serCourse] = useState({ ...props.course });
    const [errors, serErrors] = useState({  });

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert('Loading authors failed' + error);
            });
        }
    }, []);

    return (
        <CourseForm course={course} errors={errors} authors={authors} />
    );
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses: loadCourses,
    loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
