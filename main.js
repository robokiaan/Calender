var d = new Date()
var current_month = d.getMonth()
var month_number;
var year = d.getFullYear()
var reminders = []

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
    jQuery('.1 button').attr('onclick', `display_reminders('1-${month_number}-${year}')`)
    jQuery('.2').attr('id', `02-${month_number}-${year}`)
    jQuery('.2 button').attr('onclick', `display_reminders('2-${month_number}-${year}')`)
    jQuery('.3').attr('id', `03-${month_number}-${year}`)
    jQuery('.3 button').attr('onclick', `display_reminders('3-${month_number}-${year}')`)
    jQuery('.4').attr('id', `04-${month_number}-${year}`)
    jQuery('.4 button').attr('onclick', `display_reminders('4-${month_number}-${year}')`)
    jQuery('.5').attr('id', `05-${month_number}-${year}`)
    jQuery('.5 button').attr('onclick', `display_reminders('5-${month_number}-${year}')`)
    jQuery('.6').attr('id', `06-${month_number}-${year}`)
    jQuery('.6 button').attr('onclick', `display_reminders('6-${month_number}-${year}')`)
    jQuery('.7').attr('id', `07-${month_number}-${year}`)
    jQuery('.7 button').attr('onclick', `display_reminders('7-${month_number}-${year}')`)
    jQuery('.8').attr('id', `08-${month_number}-${year}`)
    jQuery('.8 button').attr('onclick', `display_reminders('8-${month_number}-${year}')`)
    jQuery('.9').attr('id', `09-${month_number}-${year}`)
    jQuery('.9 button').attr('onclick', `display_reminders('9-${month_number}-${year}')`)
    jQuery('.10').attr('id', `10-${month_number}-${year}`)
    jQuery('.10 button').attr('onclick', `display_reminders('10-${month_number}-${year}')`)
    jQuery('.11').attr('id', `11-${month_number}-${year}`)
    jQuery('.11 button').attr('onclick', `display_reminders('11-${month_number}-${year}')`)
    jQuery('.12').attr('id', `12-${month_number}-${year}`)
    jQuery('.12 button').attr('onclick', `display_reminders('12-${month_number}-${year}')`)
    jQuery('.13').attr('id', `13-${month_number}-${year}`)
    jQuery('.13 button').attr('onclick', `display_reminders('13-${month_number}-${year}')`)
    jQuery('.14').attr('id', `14-${month_number}-${year}`)
    jQuery('.14 button').attr('onclick', `display_reminders('14-${month_number}-${year}')`)
    jQuery('.15').attr('id', `15-${month_number}-${year}`)
    jQuery('.15 button').attr('onclick', `display_reminders('15-${month_number}-${year}')`)
    jQuery('.16').attr('id', `16-${month_number}-${year}`)
    jQuery('.16 button').attr('onclick', `display_reminders('16-${month_number}-${year}')`)
    jQuery('.17').attr('id', `17-${month_number}-${year}`)
    jQuery('.17 button').attr('onclick', `display_reminders('17-${month_number}-${year}')`)
    jQuery('.18').attr('id', `18-${month_number}-${year}`)
    jQuery('.18 button').attr('onclick', `display_reminders('18-${month_number}-${year}')`)
    jQuery('.19').attr('id', `19-${month_number}-${year}`)
    jQuery('.19 button').attr('onclick', `display_reminders('19-${month_number}-${year}')`)
    jQuery('.20').attr('id', `20-${month_number}-${year}`)
    jQuery('.20 button').attr('onclick', `display_reminders('20-${month_number}-${year}')`)
    jQuery('.21').attr('id', `21-${month_number}-${year}`)
    jQuery('.21 button').attr('onclick', `display_reminders('21-${month_number}-${year}')`)
    jQuery('.22').attr('id', `22-${month_number}-${year}`)
    jQuery('.22 button').attr('onclick', `display_reminders('22-${month_number}-${year}')`)
    jQuery('.23').attr('id', `23-${month_number}-${year}`)
    jQuery('.23 button').attr('onclick', `display_reminders('23-${month_number}-${year}')`)
    jQuery('.24').attr('id', `24-${month_number}-${year}`)
    jQuery('.24 button').attr('onclick', `display_reminders('24-${month_number}-${year}')`)
    jQuery('.25').attr('id', `25-${month_number}-${year}`)
    jQuery('.25 button').attr('onclick', `display_reminders('25-${month_number}-${year}')`)
    jQuery('.26').attr('id', `26-${month_number}-${year}`)
    jQuery('.26 button').attr('onclick', `display_reminders('26-${month_number}-${year}')`)
    jQuery('.27').attr('id', `27-${month_number}-${year}`)
    jQuery('.27 button').attr('onclick', `display_reminders('27-${month_number}-${year}')`)
    jQuery('.28').attr('id', `28-${month_number}-${year}`)
    jQuery('.28 button').attr('onclick', `display_reminders('28-${month_number}-${year}')`)
    jQuery('.29').attr('id', `29-${month_number}-${year}`)
    jQuery('.29 button').attr('onclick', `display_reminders('29-${month_number}-${year}')`)
    jQuery('.30').attr('id', `30-${month_number}-${year}`)
    jQuery('.30 button').attr('onclick', `display_reminders('30-${month_number}-${year}')`)
    jQuery('.31').attr('id', `31-${month_number}-${year}`)
    jQuery('.31 button').attr('onclick', `display_reminders('31-${month_number}-${year}')`)
    display()
})

function add_reminder() {
    jQuery('.screen').hide()
    jQuery('#add_reminder').show()
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
        for (i = 0; i < reminders.length; i++) {
            console.log(reminders[i])
        }
    }
}

function display_reminders(main_date) {
    display()
    jQuery('#reminder-ul').html('')
    jQuery('#reminder-ul').append(`<h4>Reminders for<br>${main_date}</h4><br>`)
    var previous_numerical_time = '';

    for (i = 0; i < reminders.length; i++) {
        var reminder_date = String(reminders[i]).substr(-13 - String(year).length, 6 + String(year).length)
        var reminder_title = String(reminders[i]).substring(0, String(reminders[i]).indexOf(';'))
        var reminder_time = String(reminders[i]).substr(-5, 5)
        reminder_title = String(reminder_title).substr(0, 1).toUpperCase() + String(reminder_title).substring(1).toLowerCase()
        var numerical_time = Number(String(reminder_time).substr(0, 2) + String(reminder_time).substr(3, 2))
        if (reminder_date == main_date) {
            console.log(numerical_time < previous_numerical_time)
            if (numerical_time < previous_numerical_time) {
                jQuery('#reminder-ul').html(`
                    <h4>Reminders for<br>${main_date}</h4><br>
                    <li><p>${String(reminder_title)} at ${reminder_time}</p></li>
                    ${jQuery('#reminder-ul li').html()}
                `)
            } else {
                jQuery('#reminder-ul').append(`
                    <li><p>${String(reminder_title)} at ${reminder_time}</p></li>
                `)
            }
            previous_numerical_time = numerical_time
        }
    }
    if (String(jQuery('#reminder-ul').html()).includes('li') != true) {
        jQuery('#reminder-ul').append(`
            <li><p>No reminders set</p></li>
        `)
    }
}