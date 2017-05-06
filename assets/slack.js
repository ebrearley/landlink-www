$(function() {
  $('#emailForm').on("submit",function(e) {
    e.preventDefault(); // cancel the actual submit

    const name = $('#frmFirstName').val();
    const email = $('#frmEmailAddress').val();

    const emojis = [
      ':confetti_ball:',
      ':tada:',
      ':heart:',
      ':heart_eyes:',
    ];

    const slackMessage = {
        username: 'LandLink Website\'s friendly bot, Beep Boop',
        icon_emoji: emojis[Math.floor(Math.random() * emojis.length)],
        channel: '#website-test',
        attachments: [{
            fallback: `New mailing list subscription from ${name} with email: ${email}`,
            title: 'New mailing list subscription!',
            color: '#54CE5C',
            pretext: 'Holla! :simple_smile: Make way, a new subscription rolling through!',
            mrkdwn_in: ['text'],
            text: `Name: ${name}${'\n'}Email: ${email}`,
        }]
    };

    var payload = JSON.stringify(slackMessage);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://hooks.slack.com/services/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', false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(payload);

    $('#frmFirstName').val('');
    $('#frmEmailAddress').val('')
    $('#cta-success').removeClass('hidden-block');
  });
});
