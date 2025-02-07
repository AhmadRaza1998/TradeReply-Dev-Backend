@component('mail::message')
    # Hello {{ $name }},

    You requested a password reset. Click the button below to reset your password:

    @component('mail::button', ['url' => url('/reset-password/'.$token)])
        Reset Password
    @endcomponent

    If you did not request this, ignore this email.

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
