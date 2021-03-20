from django import forms


THE_CHOICES =( 
    ("1", "PR 101"), 
    ("2", "PR 102"), 
    ("3", "PR 103"), 
    ("4", "PR 40"), 
    ("5", "PR 41"), 
) 

class TheForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField(max_length=200)
    product = forms.ChoiceField(choices = THE_CHOICES)
    message = forms.CharField(max_length=2000,
        widget=forms.Textarea(),
        help_text='Write here your message!')

    source = forms.CharField(       # A hidden input for internal use
        max_length=50,              # tell from which page the user sent the message
        widget=forms.HiddenInput())


    def clean(self):
        cleaned_data = super(TheForm, self).clean()
        name = cleaned_data.get('name')
        email = cleaned_data.get('email')
        product = cleaned_data.get('product')
        message = cleaned_data.get('message')
        if not name and not email and not product and not message:
            raise forms.ValidationError('You have to write something!')






 