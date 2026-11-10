using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using NetworkHelper;
using ConsoleApp1;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            List<Locsoloversek> tomb = Backend.GET("http://localhost:3000/locsoloversek").Send().As<List<Locsoloversek>>();
            lenyilo.ItemsSource = tomb;
            lenyilo.SelectedIndex = 0;
            lenyilo.DisplayMemberPath = "cim";
        }

        private void Lenyilo_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var kivalasztott = lenyilo.SelectedItem as Locsoloversek;
            adat1.Content = $" [ {kivalasztott.stilus_nev} ]";
        }
    }
}
