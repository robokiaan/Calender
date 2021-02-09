var d = new Date()
var current_month = d.getMonth()
var year = d.getFullYear()
var reminders = []

if (current_month == 0) {
    month = 'January'
} else if (current_month == 1) {
    month = 'February'
} else if (current_month == 2) {
    month = 'March'
} else if (current_month == 3) {
    month = 'April'
} else if (current_month == 4) {
    month = 'May'
} else if (current_month == 5) {
    month = 'June'
} else if (current_month == 6) {
    month = 'July'
} else if (current_month == 7) {
    month = 'August'
} else if (current_month == 8) {
    month = 'September'
} else if (current_month == 9) {
    month = 'October'
} else if (current_month == 10) {
    month = 'November'
} else if (current_month == 11) {
    month = 'December'
}

jQuery(document).ready(function() {
    display()
    jQuery('.screen').hide()
    jQuery('#home-screen').show()
    jQuery('#month').text(month)
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

    jQuery('.1').attr('id', `1/${current_month}/${year}`)
    jQuery('.2').attr('id', `2/${current_month}/${year}`)
    jQuery('.3').attr('id', `3/${current_month}/${year}`)
    jQuery('.4').attr('id', `4/${current_month}/${year}`)
    jQuery('.5').attr('id', `5/${current_month}/${year}`)
    jQuery('.6').attr('id', `6/${current_month}/${year}`)
    jQuery('.7').attr('id', `7/${current_month}/${year}`)
    jQuery('.8').attr('id', `8/${current_month}/${year}`)
    jQuery('.9').attr('id', `9/${current_month}/${year}`)
    jQuery('.10').attr('id', `10/${current_month}/${year}`)
    jQuery('.11').attr('id', `11/${current_month}/${year}`)
    jQuery('.12').attr('id', `12/${current_month}/${year}`)
    jQuery('.13').attr('id', `13/${current_month}/${year}`)
    jQuery('.14').attr('id', `14/${current_month}/${year}`)
    jQuery('.15').attr('id', `15/${current_month}/${year}`)
    jQuery('.16').attr('id', `16/${current_month}/${year}`)
    jQuery('.17').attr('id', `17/${current_month}/${year}`)
    jQuery('.18').attr('id', `18/${current_month}/${year}`)
    jQuery('.19').attr('id', `19/${current_month}/${year}`)
    jQuery('.20').attr('id', `20/${current_month}/${year}`)
    jQuery('.21').attr('id', `21/${current_month}/${year}`)
    jQuery('.22').attr('id', `22/${current_month}/${year}`)
    jQuery('.23').attr('id', `23/${current_month}/${year}`)
    jQuery('.24').attr('id', `24/${current_month}/${year}`)
    jQuery('.25').attr('id', `25/${current_month}/${year}`)
    jQuery('.26').attr('id', `26/${current_month}/${year}`)
    jQuery('.27').attr('id', `27/${current_month}/${year}`)
    jQuery('.28').attr('id', `28/${current_month}/${year}`)
    jQuery('.29').attr('id', `29/${current_month}/${year}`)
    jQuery('.30').attr('id', `30/${current_month}/${year}`)
    jQuery('.31').attr('id', `31/${current_month}/${year}`)
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
    if (time != '' && title != '' && date != '') {
        console.log(`You have your ${title} on ${reminder_day}/${reminder_month}/${reminder_year} at ${time}`)
        var reminder = `You have your ${title} on ${reminder_day}/${reminder_month}/${reminder_year} at ${time}`
        console.log(reminder)
        reminders.push(reminder)
        localStorage.setItem(`reminders`, reminders)
        back()
    } else {
        window.alert('You have not filled in one of these details.')
    }
}

function back() {
    jQuery('.screen').hide()
    jQuery('#home-screen').show()
}

function display() {
    if (localStorage.getItem('reminders') != []) {
        reminders = localStorage.getItem('reminders')
        for (i = 0; i < reminders.length; i++) {
            console.log(reminders[i])
        }
    }
}