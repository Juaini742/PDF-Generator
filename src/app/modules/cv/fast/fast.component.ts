import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-fast',
  standalone: true,
  imports: [],
  templateUrl: './fast.component.html',
  styleUrl: './fast.component.css'
})
export class FastComponent {
  generatePDF() {
    const elementToPrint: HTMLElement | null = document.getElementById('theContent');
    const margin: number = 5
    if (elementToPrint) {
      html2canvas(elementToPrint, { scale: 2 }).then(canvas => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210 - 2 * margin;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = margin;

        pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('invoice.pdf');
      });
    }
  }
}
