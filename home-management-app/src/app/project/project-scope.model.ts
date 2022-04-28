export class ProjectScope {
  constructor(
    public name: string,
    public details?: string,
    public qty?: number,
    public qtyUnit?: string,
    private unitPrice?: number,
    private calculatedPrice?: number,
    private url?: string,
    private photo?: string
  ) {}
}


// name, details, qty, qtyUnit, unit price, calculated price, URL, photo
