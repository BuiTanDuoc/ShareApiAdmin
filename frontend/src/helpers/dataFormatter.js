import dayjs from 'dayjs';
import _ from 'lodash';

export default {
    filesFormatter(arr) {
        if (!arr || !arr.length) return [];
        return arr.map((item) => item);
    },
    imageFormatter(arr) {
        if (!arr || !arr.length) return []
        return arr.map(item => ({
            publicUrl: item.publicUrl || ''
        }))
    },
    oneImageFormatter(arr) {
        if (!arr || !arr.length) return ''
        return arr[0].publicUrl || ''
    },
    dateFormatter(date) {
        if (!date) return ''
        return dayjs(date).format('YYYY-MM-DD')
    },
    dateTimeFormatter(date) {
        if (!date) return ''
        return dayjs(date).format('YYYY-MM-DD HH:mm')
    },
    booleanFormatter(val) {
        return val ? 'Yes' : 'No'
    },
    dataGridEditFormatter(obj) {
        return _.transform(obj, (result, value, key) => {
            if (_.isArray(value)) {
                result[key] = _.map(value, 'id');
            } else if (_.isObject(value)) {
                result[key] = value.id;
            } else {
                result[key] = value;
            }
        });
    },

        usersManyListFormatter(val) {
            if (!val || !val.length) return []
            return val.map((item) => item.firstName)
        },
        usersOneListFormatter(val) {
            if (!val) return ''
            return val.firstName
        },
        usersManyListFormatterEdit(val) {
            if (!val || !val.length) return []
            return val.map((item) => {
              return {id: item.id, label: item.firstName}
            });
        },
        usersOneListFormatterEdit(val) {
            if (!val) return ''
            return {label: val.firstName, id: val.id}
        },

        categoriesManyListFormatter(val) {
            if (!val || !val.length) return []
            return val.map((item) => item.name)
        },
        categoriesOneListFormatter(val) {
            if (!val) return ''
            return val.name
        },
        categoriesManyListFormatterEdit(val) {
            if (!val || !val.length) return []
            return val.map((item) => {
              return {id: item.id, label: item.name}
            });
        },
        categoriesOneListFormatterEdit(val) {
            if (!val) return ''
            return {label: val.name, id: val.id}
        },

        contactsManyListFormatter(val) {
            if (!val || !val.length) return []
            return val.map((item) => item.first_name)
        },
        contactsOneListFormatter(val) {
            if (!val) return ''
            return val.first_name
        },
        contactsManyListFormatterEdit(val) {
            if (!val || !val.length) return []
            return val.map((item) => {
              return {id: item.id, label: item.first_name}
            });
        },
        contactsOneListFormatterEdit(val) {
            if (!val) return ''
            return {label: val.first_name, id: val.id}
        },

        leadsManyListFormatter(val) {
            if (!val || !val.length) return []
            return val.map((item) => item.name)
        },
        leadsOneListFormatter(val) {
            if (!val) return ''
            return val.name
        },
        leadsManyListFormatterEdit(val) {
            if (!val || !val.length) return []
            return val.map((item) => {
              return {id: item.id, label: item.name}
            });
        },
        leadsOneListFormatterEdit(val) {
            if (!val) return ''
            return {label: val.name, id: val.id}
        },

}
