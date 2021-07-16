module.exports = {
    short_message: context => {
        return {
            channel: context.channel,
            text: context.text
        }
    },
    welcome_message: context => {
        return {
            channel: context.channel,
            text: ':wave: Hello! I\'m here to help you publish your innovative idea',
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":wave: Suggest your innovative idea"
                    }
                },
                {
                    "type": "actions",
                    "elements": [
                        {
                            "action_id": "make_announcement",
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Suggest Innovation"
                            },
                            "style": "primary",
                            "value": "make_announcement"
                        },
                        {
                            "action_id": "dismiss",
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Dismiss"
                            },
                            "value": "dismiss"
                        }
                    ]
                }
            ]
        }
    },
    welcome_home: context => {
        return {
            type: 'home',
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        "text": ":wave: Suggest your innovative idea"
                    }
                },
                {
                    type: 'actions',
                    elements: [
                        {
                            action_id: 'make_announcement',
                            type: 'button',
                            text: {
                                type: 'plain_text',
                                text: 'Suggest Innovation'
                            },
                            style: 'primary',
                            value: 'make_announcement'
                        }
                    ]
                }
            ]
        }
    },
    request_announcement: context => {
        return {
            type: 'modal',
            title: {
                type: 'plain_text',
                text: 'Suggest Innovation'
            },
            callback_id: 'request_announcement',
            "blocks": [
                {
                    "block_id": "title",
                    "type": "input",
                    "label": {
                        "type": "plain_text",
                        "text": "Title"
                    },
                    "element": {
                        "action_id": "title_id",
                        "type": "plain_text_input",
                        "max_length": 100
                    }
                },
                {
                    "type": "input",
                    "block_id": "date",
                    "label": {
                        "type": "plain_text",
                        "text": "Pick a date"
                    },
                    "element": {
                        "type": "datepicker",
                        "action_id": "datepicker_id",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select a date"
                        }
                    }
                },
                {
                    "block_id": "image",
                    "type": "input",
                    "label": {
                        "type": "plain_text",
                        "text": "Image Url"
                    },
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "image_id",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Paste image url"
                        }
                    }
                },
                {
                    "block_id": "details",
                    "type": "input",
                    "label": {
                        "type": "plain_text",
                        "text": "Details"
                    },
                    "element": {
                        "action_id": "details_id",
                        "type": "plain_text_input",
                        "multiline": true,
                        "max_length": 500,
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Long description"
                        }
                    }
                },
                {
                    "block_id": "tweet",
                    "type": "input",
                    "label": {
                        "type": "plain_text",
                        "text": "Tweet"
                    },
                    "element": {
                        "action_id": "tweet_id",
                        "type": "plain_text_input",
                        "max_length": 144,
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Short description"
                        }
                    }
                }
            ],
            submit: {
                type: 'plain_text',
                text: 'Next'
            }
        }
    },
    confirm_announcement: context => {
        return {
            response_action: 'push',
            view: {
                callback_id: 'confirm_announcement',
                type: 'modal',
                title: {
                    type: 'plain_text',
                    text: 'Confirm request'
                },
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `*TITLE*`
                        }
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: context.announcement.title
                        }
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `*DATE*`
                        }
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: context.announcement.date
                        }
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `*IMAGE*`
                        }
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'image',
                            text: context.announcement.image
                        }
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `*DESCRIPTION*`
                        }
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: context.announcement.details
                        }
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `*TWEET*`
                        }
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: context.announcement.tweet
                        }
                    }
                ],
                close: {
                    type: 'plain_text',
                    text: 'Back'
                },
                submit: {
                    type: 'plain_text',
                    text: 'Submit'
                },
                private_metadata: JSON.stringify(context.announcement)
            }
        }
    },
    finish_announcement: context => {
        return {
            response_action: 'update',
            view: {
                callback_id: 'finish_announcement',
                clear_on_close: true,
                type: 'modal',
                title: {
                    type: 'plain_text',
                    text: 'Success :tada:',
                    emoji: true
                },
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `Your innovative idea has been sent for approval.`
                        }
                    }
                ],
                close: {
                    type: 'plain_text',
                    text: 'Done'
                }
            }
        }
    },
    approve: context => {
        return {
            channel: context.channel,
            text: `Innovation approval is requested by <@${context.requester}>`,
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `<@${context.requester}> is requesting an innovation idea.`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *TITLE*\n${context.title}\n\n*DATE*\n${context.date}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *IMAGE*\n${context.image}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *DESCRIPTION*\n${context.details}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *TWEET*\n${context.tweet}`
                    }
                },
                {
                    type: 'actions',
                    elements: [
                        {
                            action_id: 'approve',
                            type: 'button',
                            text: {
                                type: 'plain_text',
                                text: 'Approve',
                                emoji: true
                            },
                            style: 'primary',
                            value: JSON.stringify(context)
                        },
                        {
                            action_id: 'reject',
                            type: 'button',
                            text: {
                                type: 'plain_text',
                                text: 'Reject',
                                emoji: true
                            },
                            style: 'danger',
                            value: JSON.stringify(context)
                        }
                    ]
                }
            ]
        }
    },
    rejected: context => {
        return {
            channel: context.channel,
            text: 'Your idea has been rejected.',
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `<@${context.requester}> is requesting an innovation idea.`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *TITLE*\n${context.title}\n\n*DATE*\n${context.date}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *IMAGE*\n${context.image}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *DESCRIPTION*\n${context.details}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *TWEET*\n${context.tweet}`
                    }
                }
            ]
        }
    },
    announcement: context => {
        return {
            channel: context.channel,
            text: `Innovation from: <@${context.requester}>`,
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `<@${context.requester}> is requesting an innovation idea.`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *TITLE*\n${context.title}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *DATE*\n${context.date}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *IMAGE*\n${context.image}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *DESCRIPTION*\n${context.details}`
                    }
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `>>> *TWEET*\n${context.tweet}`
                    }
                },
            ]
        }
    }

}