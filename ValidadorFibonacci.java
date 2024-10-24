import java.util.Scanner;

public class ValidadorFibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();
        scanner.close();

        boolean pertence = isFibonacci(numero);
        String mensagem = pertence
                ? "O número " + numero + "pertence à sequência Fibonacci. "
                : "O número " + numero + "não pertence à sequência Fibonacci. ";
        System.out.print(mensagem);

    }
    
    private static boolean isFibonacci(int numero) {
        if (numero < 0) {
            return false;
        }
        int numero1 = 0;
        int numero2 = 1;

        while (numero1 <= numero) {
            if (numero1 == numero) {
                return true;
            }
            int proximo = numero1 + numero2;
            numero1 = numero2;
            numero2 = proximo;
        }
        return false;
    }
}