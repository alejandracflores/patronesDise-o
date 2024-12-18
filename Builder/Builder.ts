/// Builder en Typescript

// Sistema de creación de informes para una empresa
// Generar informes con diferentes secciones: encabezado, contenido, pie de páginas


interface ReportBuilder {
    setHeader(header: string): void;
    setContent(content: string): void;
    setFooter(footer: string): void;
    build(): ReportDocument;
}

class ReportDocument {
    constructor(
        private header: string,
        private content: string,
        private footer: string
    ) {}

    generatePDF(): void {
        console.log('Generating PDF report...');
        console.log('Header: ' + this.header);
        console.log('Content: ' + this.content);
        console.log('Footer: ' + this.footer);
        console.log('PDF report generated successfully');
    }

    generateHTML(): void {
        console.log('Generating HTML report...');
        console.log('Header: ' + this.header);
        console.log('Content: ' + this.content);
        console.log('Footer: ' + this.footer);
        console.log('HTML report generated successfully');
    }
}

class ConcreteReportBuilder implements ReportBuilder {
    private header: string = '';
    private content: string = '';
    private footer: string = '';

    setHeader(header: string): void {
        this.header = header;
    }

    setContent(content: string): void {
        this.content = content;
    }

    setFooter(footer: string): void {
        this.footer = footer;
    }

    build(): ReportDocument {
        return new ReportDocument(this.header, this.content, this.footer);
    }
}

// Uso del builder
const reportBuilder: ReportBuilder = new ConcreteReportBuilder();
reportBuilder.setHeader('Report Header');
reportBuilder.setContent('Report Content');
reportBuilder.setFooter('Report Footer');

// Crear el reporte usando el método `build`
const report: ReportDocument = reportBuilder.build();

// Generar las salidas
report.generatePDF();
report.generateHTML();