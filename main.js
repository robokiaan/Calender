var d = new Date()
var month_number;
var current_month = d.getMonth()
var year = d.getFullYear()
var day = d.getDate()
var reminders = []
var special_events = [
    `Valentine's day; 14-02-${year}`,
    `Halloween; 31-10-${year}`,
    `Christmas; 25-12-${year}`,
    `Christmas eve; 24-12-${year}`,
    `New year; 01-01-${year}`,
    `New year eve; 31-12-${year}`,
    `Navratri start; 17-10-${year}`,
    `Navratri end; 25-10-${year}`,
    `Diwali; 04-11-${year}`,
    `Holi; 29-03-${year}`,
]

if (current_month == 0) {
    month = 'January'
    month_number = '01'
} else if (current_month == 1) {
    month = 'February'
    month_number = '02'
} else if (current_month == 2) {
    month = 'March'
    month_number = '03'
} else if (current_onth == 3) {
    month = 'April'
    month_number = '04'
} else if (current_month == 4) {
    month = 'May'
    month_number = '05'
} else if (current_month == 5) {
    month = 'June'
    month_number = '06'
} else if (current_month == 6) {
    month = 'July'
    month_number = '07'
} else if (current_month == 7) {
    month = 'August'
    month_number = '08'
} else if (current_month == 8) {
    month = 'September'
    month_number = '09'
} else if (current_month == 9) {
    month = 'October'
    month_number = 10
} else if (current_month == 10) {
    month = 'November'
    month_number = 11
} else if (current_month == 11) {
    month = 'December'
    month_number = 12
}

jQuery(document).ready(function() {    
    jQuery('.screen').hide()
    jQuery('#home-screen').show()
    jQuery('#month').text(month + ' ' + year)
    if (month != 'February') {
        jQuery('.29').text('29')
        jQuery('.30').text('31')
    }

    if (month == 'January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December') {
        jQuery('.31').text('31')
    }

    if (month == 'February') {
        jQuery('.30').text('')
        jQuery('.31').text('')
    }

    var leap_year = Number(year) / 4
    var leap_year_check = String(leap_year).includes('.')
    if (leap_year_check == false && month == 'February') {
        jQuery('.29').text('29')
    } else {
        jQuery('.29').text('')
    }

    id = jQuery('.days').attr('id')

    jQuery('.1').attr('id', `01-${month_number}-${year}`)
    jQuery('.1').attr('onclick', `display_reminders('1-${month_number}-${year}')`)
    jQuery('.2').attr('id', `02-${month_number}-${year}`)
    jQuery('.2').attr('onclick', `display_reminders('2-${month_number}-${year}')`)
    jQuery('.3').attr('id', `03-${month_number}-${year}`)
    jQuery('.3').attr('onclick', `display_reminders('3-${month_number}-${year}')`)
    jQuery('.4').attr('id', `04-${month_number}-${year}`)
    jQuery('.4').attr('onclick', `display_reminders('4-${month_number}-${year}')`)
    jQuery('.5').attr('id', `05-${month_number}-${year}`)
    jQuery('.5').attr('onclick', `display_reminders('5-${month_number}-${year}')`)
    jQuery('.6').attr('id', `06-${month_number}-${year}`)
    jQuery('.6').attr('onclick', `display_reminders('6-${month_number}-${year}')`)
    jQuery('.7').attr('id', `07-${month_number}-${year}`)
    jQuery('.7').attr('onclick', `display_reminders('7-${month_number}-${year}')`)
    jQuery('.8').attr('id', `08-${month_number}-${year}`)
    jQuery('.8').attr('onclick', `display_reminders('8-${month_number}-${year}')`)
    jQuery('.9').attr('id', `09-${month_number}-${year}`)
    jQuery('.9').attr('onclick', `display_reminders('9-${month_number}-${year}')`)
    jQuery('.10').attr('id', `10-${month_number}-${year}`)
    jQuery('.10').attr('onclick', `display_reminders('10-${month_number}-${year}')`)
    jQuery('.11').attr('id', `11-${month_number}-${year}`)
    jQuery('.11').attr('onclick', `display_reminders('11-${month_number}-${year}')`)
    jQuery('.12').attr('id', `12-${month_number}-${year}`)
    jQuery('.12').attr('onclick', `display_reminders('12-${month_number}-${year}')`)
    jQuery('.13').attr('id', `13-${month_number}-${year}`)
    jQuery('.13').attr('onclick', `display_reminders('13-${month_number}-${year}')`)
    jQuery('.14').attr('id', `14-${month_number}-${year}`)
    jQuery('.14').attr('onclick', `display_reminders('14-${month_number}-${year}')`)
    jQuery('.15').attr('id', `15-${month_number}-${year}`)
    jQuery('.15').attr('onclick', `display_reminders('15-${month_number}-${year}')`)
    jQuery('.16').attr('id', `16-${month_number}-${year}`)
    jQuery('.16').attr('onclick', `display_reminders('16-${month_number}-${year}')`)
    jQuery('.17').attr('id', `17-${month_number}-${year}`)
    jQuery('.17').attr('onclick', `display_reminders('17-${month_number}-${year}')`)
    jQuery('.18').attr('id', `18-${month_number}-${year}`)
    jQuery('.18').attr('onclick', `display_reminders('18-${month_number}-${year}')`)
    jQuery('.19').attr('id', `19-${month_number}-${year}`)
    jQuery('.19').attr('onclick', `display_reminders('19-${month_number}-${year}')`)
    jQuery('.20').attr('id', `20-${month_number}-${year}`)
    jQuery('.20').attr('onclick', `display_reminders('20-${month_number}-${year}')`)
    jQuery('.21').attr('id', `21-${month_number}-${year}`)
    jQuery('.21').attr('onclick', `display_reminders('21-${month_number}-${year}')`)
    jQuery('.22').attr('id', `22-${month_number}-${year}`)
    jQuery('.22').attr('onclick', `display_reminders('22-${month_number}-${year}')`)
    jQuery('.23').attr('id', `23-${month_number}-${year}`)
    jQuery('.23').attr('onclick', `display_reminders('23-${month_number}-${year}')`)
    jQuery('.24').attr('id', `24-${month_number}-${year}`)
    jQuery('.24').attr('onclick', `display_reminders('24-${month_number}-${year}')`)
    jQuery('.25').attr('id', `25-${month_number}-${year}`)
    jQuery('.25').attr('onclick', `display_reminders('25-${month_number}-${year}')`)
    jQuery('.26').attr('id', `26-${month_number}-${year}`)
    jQuery('.26').attr('onclick', `display_reminders('26-${month_number}-${year}')`)
    jQuery('.27').attr('id', `27-${month_number}-${year}`)
    jQuery('.27').attr('onclick', `display_reminders('27-${month_number}-${year}')`)
    jQuery('.28').attr('id', `28-${month_number}-${year}`)
    jQuery('.28').attr('onclick', `display_reminders('28-${month_number}-${year}')`)
    jQuery('.29').attr('id', `29-${month_number}-${year}`)
    jQuery('.29').attr('onclick', `display_reminders('29-${month_number}-${year}')`)
    jQuery('.30').attr('id', `30-${month_number}-${year}`)
    jQuery('.30').attr('onclick', `display_reminders('30-${month_number}-${year}')`)
    jQuery('.31').attr('id', `31-${month_number}-${year}`)
    jQuery('.31').attr('onclick', `display_reminders('31-${month_number}-${year}')`)
    if (String(day).length == 1) {
        day = '0' + day
    }
    jQuery(`#${day}-${month_number}-${year} label`).css('background-color', '#31b0d5')
    jQuery(`#${day}-${month_number}-${year} label`).css('color', '#fff')
    display()
})

function add_reminder() {
    jQuery('.screen').hide()
    jQuery('#add_reminder').show()
}

function view_reminders() {
    jQuery('.screen').hide()
    jQuery('#view_reminders').show()
    for (i = 0; i < reminders.length; i++) {
        var reminder_date = String(reminders[i]).substr(String(reminders[i]).indexOf(';') + 2, 6 + String(year).length)
        var reminder_title = String(reminders[i]).substring(0, String(reminders[i]).indexOf(';'))
        var reminder_time = String(reminders[i]).substr(-5, 5)

        
        var reminder_day = String(reminder_date).substr(0, 2)
        var reminder_month = String(reminder_date).substr(3, 2)
        var reminder_year = String(reminder_date).substring(6)
        reminder_date = `${reminder_year}-${reminder_month}-${reminder_day}`

        console.log(reminder_time)
        jQuery('#reminders').append(`
            <input type="text" class="form-control reminder-view-input col-lg-4" value="${reminder_title}">
            <input type="date" class="form-control reminder-view-input col-lg-4" value="${reminder_date}">
            <input type="time" class="form-control reminder-view-input col-lg-4" value="${reminder_time}">
        `)
    }
}

function add() {
    var title = jQuery('#reminder-title').val()
    var date = jQuery('#reminder-date').val()
    var time = jQuery('#reminder-time').val()
    var reminder_day = String(date).substring(Number(String(date).indexOf('-')) + 4, Number(String(date).indexOf('-')) + 6)
    var reminder_month = String(date).substring(Number(String(date).indexOf('-')) + 1, Number(String(date).indexOf('-')) + 3)
    var reminder_year = String(date).substring(0, Number(String(date).indexOf('-')))
    date = `${reminder_day}-${reminder_month}-${reminder_year}`
    if (time != '' && title != '' && date != '') {
        var reminder = `${title}; ${date}; ${time}`
        console.log(reminder)
        reminders.push(reminder)
        console.log(reminders)
        localStorage.setItem('reminders', reminders)
        back()
        display()
    } else {
        window.alert('You have not filled in one of these details.')
    }
}

function back() {
    jQuery('.screen').hide()
    jQuery('#home-screen').show()
}

function display() {
    if (localStorage.getItem('reminders') != null) {
        reminders = String(localStorage.getItem('reminders')).split(',')
        for (i = 0; i < special_events.length; i++) {
            if (reminders.toString().includes(special_events[i]) != true) {
                reminders.push(special_events[i])
            }
        }
        reminders = reminders.sort()
        for (i = 0; i < reminders.length; i++) {
            var overall_reminder_date = String(reminders[i]).substr(String(reminders[i]).indexOf(';') + 2, 6 + String(year).length)
            jQuery(`#${overall_reminder_date} label`).css('background-color', 'red')
            jQuery(`#${overall_reminder_date} label`).css('color', 'white')
        }
    }    
    sort_reminders()   
}

function display_reminders(main_date) {
    display()
    jQuery('#reminder-ul').html('')
    jQuery('#reminder-ul').append(`<h4>Reminders for<br>${main_date}</h4><br>`)
    var times_array = []
    var reminders_array = []
    var days_reminders = []

    for (i = 0; i < reminders.length; i++) {
        var reminder_date = String(reminders[i]).substr(String(reminders[i]).indexOf(';') + 2, 6 + String(year).length)
        var reminder_title = String(reminders[i]).substring(0, String(reminders[i]).indexOf(';'))
        var reminder_time = String(reminders[i]).substr(-5, 5)
        reminder_title = String(reminder_title).substr(0, 1).toUpperCase() + String(reminder_title).substring(1).toLowerCase()
        var numerical_time = Number(String(reminder_time).substr(0, 2) + String(reminder_time).substr(3, 2))

        if (reminder_date == main_date) {
            times_array.push(numerical_time)
        }
    }
    times_array.sort(function(a, b){return a - b})
    for (i = 0; i < times_array.length; i++) {
        if (String(times_array[i]).includes('-')) {
            times_array[i] = "0000"
        } else {
            if (String(times_array[i]).length == 3) {
                times_array[i] = "0" + times_array[i]
            }
        }
        times_array[i] = String(times_array[i]).substr(0, 2) + ':' + String(times_array[i]).substr(2, 2)
    }

    for (i = 0; i < reminders.length; i++) {
        var reminder_date = String(reminders[i]).substr(String(reminders[i]).indexOf(';') + 2, 6 + String(year).length)
        if (reminder_date == main_date) {
            days_reminders.push(reminders[i])
        }
    }

    for (i = 0; i < times_array.length; i++) {
        console.log(times_array)
        for (a = 0; a < days_reminders.length; a++) {
            var reminder_date = String(days_reminders[a]).substr(String(days_reminders[a]).indexOf(';') + 2, 6 + String(year).length)
            var reminder_time = String(days_reminders[a]).substr(-5, 5)            
            if (reminder_date == main_date) {
                if (reminder_time.includes('-')) {
                    reminder_time = '00:00'
                }
                if (reminder_time == times_array[i]) {
                    reminders_array.push(days_reminders[a])
                    console.log(reminders_array)
                }
            }
        }
    }
    reminders_array.forEach(function(value, index, array) {
        var reminder_title = String(value).substring(0, String(value).indexOf(';'))
        var reminder_time = String(value).substr(-5, 5)
        if (reminder_time.includes('-')) {
            jQuery(`#reminder-ul`).append(`<li><p>${reminder_title}<br></li></p>`)
        } else {
            jQuery(`#reminder-ul`).append(`<li><p>${reminder_title} at ${reminder_time}<br></li></p>`)
        }
    })

    if (String(jQuery('#reminder-ul').html()).includes('li') == false) {
        jQuery('#reminder-ul').append(`
            <li><p>No reminders set</p></li>
        `)
    }
}

function sort_reminders() {
    for (i = 0; i < reminders.length; i++) {
        reminders[i] = String(reminders[i])
        reminders[i] = reminders[i].substr(0, 1).toUpperCase() + reminders[i].substring(1).toLowerCase()
    }
    reminders = reminders.sort()
}