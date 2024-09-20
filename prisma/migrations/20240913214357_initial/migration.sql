-- CreateTable
CREATE TABLE "Psicologos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "crp" TEXT NOT NULL,

    CONSTRAINT "Psicologos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("id")
);
