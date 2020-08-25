using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace QP
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            
            
        }

        private void ChangeQuotes(object sender, EventArgs e)
        {
            int m = 0;
            String[] quotes = new string[10];
            quotes[0] = "You know you're in love when you can't fall asleep because reality is finally better than your dreams";
            quotes[1] = "A friend is someone who knows all about you and still loves you";
            quotes[2] = "We accept the love we think we deserve";
            quotes[3] = "It is better to be hated for what you are than to be loved for what you are not";
            quotes[4] = "As he read, I fell in love the way you fall asleep: slowly, and then all at once";
            quotes[5] = "It is not a lack of love, but a lack of friendship that makes unhappy marriages";
            quotes[6] = "Love all, trust a few, do wrong to none";
            quotes[7] = "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage";
            quotes[8] = "Love is that condition in which the happiness of another person is essential to your own";
            quotes[9] = "Love is like the wind, you can't see it but you can feel it";
            
            for (int i = 0; i < quotes.Length; i++) {
                if (displayQuotes.Text == quotes[i]) {
                    m = i + 1;
                    if (m == quotes.Length)
                    {
                        m = 0;
                    }

                    break;
                }
            }
            displayQuotes.Text = quotes[m];
            
        }
    }
}
